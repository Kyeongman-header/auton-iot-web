import Image from 'next/image';
import logo from '../public/logo.png';
import { settoken } from '../redux/token_slices';
import { RootState } from '../redux/store';
//redux 사용을 위한  state type

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
// redux의 사용을 위한 훅.


export default function Navigation()
{
  const token = useSelector((state: RootState) => state.token.token);
  const login=useSelector((state:RootState)=>state.token.login);
  const dispatch = useDispatch();
  const router=useRouter();
  //NAV 바에서는 toggle 버튼을 양옆에 생성한다. 이 토글 버튼을 누르면 양쪽의 bar가 켜진 채로 고정된다.
  //그리고 gps 구글 맵은 어떻게 ui를 작성할 것인지 고민해야 한다.
  //onClick={()=>{login ?  router.push('/sample') : router.push('/login')}}> 실제로는 로그인 / 로그아웃 버튼을 누르면 각각 로그인 페이지/ 샘플 페이지로 이동해야 한다.
    return (
      <div className="flex flex-col flex-between w-screen h-fit  bg-white">
        <div className="w-full flex flex-row justify-between">
          <p className="translate-y-2 translate-x-2 animate-pulse">
            {login? "Administer 접속중" : "이것은 예시 화면입니다. web master 계정으로 로그인해주세요."}
          </p>
          <button className="translate-y-2 -translate-x-2 border border-slate-500 rounded-lg text-black w-20 transition ease-in-out hover:bg-slate-200 duration-300 "
          onClick={()=>{login ? dispatch(settoken("")) : dispatch(settoken("005d516b38535a1e0b1acd0e0d61ed26d4dcb3cd"))}}>
            {login ? "Logout" : "Login"}
          </button>
        </div>
        <nav className="w-full h-30 grid grid-cols-1">
          <div className="justify-self-center flex flex-col justify-center transition ease-in-out hover:shadow duration-300">
            <Image src={logo} className="scale-75 h-fit" alt="logo.png"></Image>
            <p className="text-center font-[600] text-2xl text-green-700">
              auton-iot Admin center
            </p>
          </div>
        </nav>
      </div>
    );
}