import Image from "next/image";
import SearcherInput from "@/components/SearcherInput";
import {useState} from "react";

export default function Home() {
    const [searcher,setSearcher] = useState('')
  return (
    <main className="flex flex-col w-full h-screen items-center justify-start">
      <div className={'flex flex-col w-full px-[100px] py-[50px] h-screen flex-row justify-start items-start bg1'}>
          <div className={'flex flex-wrap w-full justify-between items-center'}>
              <div className={'flex flex-row relative'}>
                  <div className={'extra1 w-[836px] absolute top-[-500px] left-[-500px] h-[836px]'}></div>
                  <div className={'extra2 w-[836px] absolute top-[-500px] left-0    h-[836px]'}></div>

                  <h5 className={'manrope800 text1 text-[60px]'}>
                      Search Image App
                  </h5>
              </div>
              <div className={'relative'}>
                  <a target={'_blank'} href={'https://github.com/lutfiEmre'}>
                      <div className={'w-[400px] cursor-pointer transition-all duration-1000 flex justify-center items-center gap-[15px] h-[70px] bg2'}>
                          <svg className={'w-[50px]'} xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91" fill="none">
                              <g clip-path="url(#clip0_211_402)">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M45.8574 0.129333C70.7548 0.129333 90.937 20.8206 90.937 46.3491C90.937 66.7657 78.0352 84.0854 60.1341 90.2027C57.8485 90.658 57.0371 89.2146 57.0371 87.9839C57.0371 86.4602 57.0912 81.4836 57.0912 75.2987C57.0912 70.9891 55.6487 68.1763 54.0303 66.7428C64.0695 65.5978 74.6181 61.689 74.6181 43.9367C74.6181 38.8878 72.8691 34.7677 69.975 31.531C70.4438 30.3634 71.99 25.6622 69.5332 19.297C69.5332 19.297 65.7555 18.0585 57.1498 24.036C53.5479 23.0127 49.6891 22.4979 45.8574 22.4798C42.0256 22.4979 38.1713 23.0127 34.574 24.036C25.9592 18.0585 22.1726 19.297 22.1726 19.297C19.7247 25.6622 21.271 30.3634 21.7353 31.531C18.8547 34.7677 17.0921 38.8878 17.0921 43.9367C17.0921 61.6439 27.6182 65.6127 37.6304 66.7802C36.3411 67.9343 35.1735 69.9701 34.7678 72.9589C32.1983 74.1399 25.6707 76.184 21.6496 69.12C21.6496 69.12 19.2649 64.6791 14.7389 64.3546C14.7389 64.3546 10.3437 64.2962 14.4324 67.1632C14.4324 67.1632 17.3851 68.5832 19.4362 73.9252C19.4362 73.9252 22.0824 82.1746 34.6236 79.3796C34.6461 83.2429 34.6867 86.884 34.6867 87.9839C34.6867 89.2056 33.8572 90.6353 31.6077 90.2071C13.6931 84.0988 0.777771 66.7702 0.777771 46.3491C0.777771 20.8206 20.9644 0.129333 45.8574 0.129333Z" fill="white"/>
                              </g>
                              <defs>
                                  <clipPath id="clip0_211_402">
                                      <rect width="90.1592" height="90.1592" fill="white" transform="translate(0.777771 0.129333)"/>
                                  </clipPath>
                              </defs>
                          </svg>
                          <h5 className={'manrope800 text-[40px] text-white'}>lutfiEmre</h5>
                      </div>
                  </a>
                  <div className={'extra3 w-[200px] h-[200px] absolute'}></div>

              </div>

          </div>
          <div className={'w-full mt-[81px] h-[60px] z-20  bg3'}>
              <SearcherInput searcher={searcher} setSearcher={setSearcher}/>
          </div>
      </div>
    </main>
  );
}
