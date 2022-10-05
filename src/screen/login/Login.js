import React, {useEffect, useMemo, useState} from "react";
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Pressable,
    Platform,
    KeyboardAvoidingView, Button, Alert,
} from "react-native";
import style from "./style.js";
import image from "../../images/group.png";
import {useNavigation} from "@react-navigation/native";
import User from "../../assets/svg/SvgUser";
import Password from "../../assets/svg/SvgPassword";
import Ice from "../../assets/svg/SvgIce";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest, userRequest} from "../../store/actions";
import Loading from "../../components/Loading";
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import GoogleIcon from "../../assets/svg/GoogleIcon";
import FbIcon from "../../assets/svg/FbIcon";
import size from "../../assets/Size";
import SvgPhone from "../../assets/svg/SvgPhone";


function Login(props) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({});
    const [phoneNumber, setPhoneNumber] = useState(false)
    const [email, setEmail] = useState(false)
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [phone, setPhone] = useState('');
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const handlerChange = (key, val) => {
        setFormData({...formData, [key]: val});
    };
    const handlerChangePhone = (val) => {
        setPhone(val)
    };
    const handlerLogin = () => {
        dispatch(loginRequest(formData, (data) => {
            if (data.success === true) {
                navigate.navigate("navigate");
            }
            if (data.success === false) {
                alert(`${data?.errors?.password}
        ${data?.errors?.username}`)
            }
        }))
    };
    const pressHandler = () => {
        navigate.navigate("forgotpassword");
    };
    GoogleSignin.configure({
        webClientId: "546318346374-csvsstit350thav6jj7c39l4oqf9a43n.apps.googleusercontent.com",
    });

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        if (!phoneNumber){
            alert('Please Write Phone Number')
        }else {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        }
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            navigate.navigate('navigate')
            setConfirm(null)
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    const singInwithGoogle = async () => {
// Get the users ID token
        const {idToken} = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user_sign_in = auth().signInWithCredential(googleCredential);
        user_sign_in.then((user) => {
            dispatch(userRequest(user.additionalUserInfo.profile.name))
            navigate.navigate('navigate')
        }).catch((error) => {
            console.log(error);
        })
    }

    function onAuthStateChanged(user) {
        if (user){
            dispatch(userRequest(user.displayName))
            navigate.navigate('navigate')
        }
    }

    const FacebookLogin = async () => {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);

    }
    if (!confirm) {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={style.container}
            >
                <View style={style.body}>
                    <View style={style.viewImage}>
                        <Image source={image} style={style.image}/>
                    </View>
                    <Text style={style.login}>Log in</Text>
                    {phoneNumber &&
                    <>
                        <View style={style.inputView}>
                            <SvgPhone/>
                            <TextInput style={style.inputEmail} placeholder="Phone Numbre" autoComplete="tel"
                                       keyboardType="phone-pad"
                                       onChangeText={(v) => handlerChangePhone(v)}
                            />
                        </View>
                        <TouchableOpacity style={style.buttens2} onPress={() =>
                            signInWithPhoneNumber(phone)
                        }>
                            <Text style={style.loginText}>Login</Text>
                        </TouchableOpacity>
                    </>
                    }

                    {email && <>
                        <View style={style.inputView}>
                            <User/>
                            <TextInput style={style.inputEmail} placeholder="Email" autoComplete="email"
                                       keyboardType="email-address"
                                       onChangeText={(v) => handlerChange("username", v)}
                            />
                        </View>
                        <View style={style.inputView}>
                            <Password/>
                            <TextInput style={style.inputPassword} placeholder="Password" autoComplete="password"
                                       secureTextEntry={isSecureEntry}
                                       onChangeText={(v) => handlerChange("password", v)}

                            />
                            <Pressable
                                onPress={() => {
                                    setIsSecureEntry(prev => !prev);
                                }}>
                                <Ice/>
                            </Pressable>
                        </View>
                        <View style={style.forgetView}>
                            <Text style={style.forget} onPress={pressHandler}>
                                Forgot password?
                            </Text>
                        </View>
                        <TouchableOpacity style={style.buttens2} onPress={handlerLogin}>
                            <Text style={style.loginText}>Login</Text>
                        </TouchableOpacity>
                    </>
                    }
                    <View style={style.inputView2}>
                        {!email ? <TouchableOpacity style={style.buttens} onPress={() => {
                            setEmail(true)
                            setPhoneNumber(false)
                        }}>
                            <Text style={style.loginText}>Login Email</Text>
                        </TouchableOpacity> : null}

                        {!phoneNumber ? <TouchableOpacity style={style.buttens} onPress={() => {
                            setPhoneNumber(true)
                            setEmail(false)
                        }}>
                            <Text style={style.loginText}>Login Phone</Text>
                        </TouchableOpacity> : null}
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{marginTop: size.size20, fontFamily: 'Montserrat'}}>
                            Or sign in with
                        </Text>
                        <View style={style.socialLog}>
                            <TouchableOpacity
                                style={style.googleSt}
                                onPress={() => singInwithGoogle()}>
                                <GoogleIcon/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.fbSt}
                                onPress={() => FacebookLogin()}>
                                <FbIcon/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {loading ? <Loading/> : null}
            </KeyboardAvoidingView>
        );
    }
    return (
        <View>
            <TextInput value={code} onChangeText={text => setCode(text)}/>
            <Button title="Confirm Code" onPress={() => confirmCode()}/>
        </View>
    );
}


export default Login;
