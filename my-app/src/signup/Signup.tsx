import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditIcon } from '../style/EditProfileStyle';
import axiosInstance from '../axiosConfig';

const emailRegex: RegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
interface ValuesState {
    email: string;
    nickname: string;
    name: string;
    password: string;
    confirmPassword: string;
    gender: null | string;
    birthday: string;
  }
  
  interface ErrorsState {
    emailError: string;
    nicknameError: string;
    passwordError: string;
    fetchError: string;
    lengthError: string;
  }
  
  const NewSignup: React.FC = () => {
    const [values, setValues] = useState<ValuesState>({
      email: '',
      nickname: '',
      name: '',
      password: '',
      confirmPassword: '',
      gender: null,
      birthday: '',
    });
  
    const [errors, setErrors] = useState<ErrorsState>({
      emailError: '',
      nicknameError: '',
      passwordError: '',
      fetchError: '',
      lengthError: '',
    });
  
    const [isEmailChecked, setEmailChecked] = useState<boolean>(false);
    const [isNicknameChecked, setNicknameChecked] = useState<boolean>(false);
  
    const navigate = useNavigate();
  
    const nameIcon: string = '/svg/join-name.svg';
    const introIcon: string = '/svg/join-intro.svg';
    const dateIcon: string = '/svg/join-date.svg';
    const genderIcon: string = '/svg/join-gender.svg';
    const mailIcon: string = '/svg/join-mail.svg';
    const pwdIcon: string = '/svg/join-password.svg';
  
    const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValues((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      console.log(1);
      setValues((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
      if (e.target.name === 'nickname' && e.target.value.length > 9) {
        setErrors((prev) => ({
          ...prev,
          lengthError: '8글자까지 입력이 가능합니다.',
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          lengthError: '',
        }));
      }
    };
  }
  // 프로젝트 NewSignup에서 이메일 중복여부 부터 이어서하기