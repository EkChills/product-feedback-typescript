import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react"
import { PulseLoader } from "react-spinners"
import ActionButton from "./ui/ActionButton"
import { useAppDispatch, useAppSelector } from "../types/hooks"
import { addReply } from "../features/productsRequestSlice"
import { toast } from "react-toastify"


interface Props {
  commentId:string | number,
  mainId:number | string,
  setShowReply?:Dispatch<SetStateAction<boolean>>,
  setShowInput?:Dispatch<SetStateAction<boolean>>,
  condition:string;
  nestedId?:number | undefined;
}
const AddReply = ({commentId, mainId, setShowReply, setShowInput, condition, nestedId}: Props):JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [reply, setReply] = useState<string>('')
  const {suggestions} = useAppSelector((store) => store.productRequest)
  const {user} = useAppSelector((store) => store.user)
  function getUser() {
    const foundReply = suggestions.find((suggestion) => suggestion.id == mainId)?.comments?.find((foundReply) => foundReply.id === commentId)
    if(condition === 'nested-reply') {
      return foundReply?.replies![nestedId!]
    }
    if(condition === 'add-reply') {
      return foundReply
    }
  }
  // const foundReply = suggestions.find((suggestion) => suggestion.id == mainId)?.comments?.find((foundReply) => foundReply.id === commentId)
  // const foundNestedReply = foundReply?.replies![nestedId ? nestedId : ]
  const dispatch = useAppDispatch()
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setReply(event.target.value)
  }

  const onSubmitHandler = async(e:React.FormEvent) => {
    e.preventDefault()
    if(!reply || isLoading) return
    setIsLoading(true)
    await new Promise((resolve, reject) => {
      if(reply) {
        setTimeout(() => {
          resolve('promise resolved')
        }, 2000)
      } else {
        reject('couldnt post comment')
      }
    }).finally(() => setIsLoading(false))
    if(condition === 'add-reply') {
      if(typeof getUser()?.user.name === 'string') {
        dispatch(addReply({mainId:mainId, commentId:commentId, condition:condition, reply:{content:reply, replyingTo:getUser()!.user.name, user:{
          image:user.image,
          name:user.name,
          username:user.username
        }}}))
      }
      setReply('')
      toast.success('reply added')
      setShowReply!(false)
      return
    }

    if(condition === 'nested-reply') {
      if(typeof getUser()?.user.name === 'string') {
        dispatch(addReply({mainId:mainId, commentId:commentId, condition:condition, reply:{content:reply, replyingTo:getUser()!.user.name, user:{
          image:user.image,
          name:user.name,
          username:user.username
        }}}))
      }
      setReply('')
      setShowInput!(false)
      toast.success('Reply added')
      return
    }
   
  }

  useEffect(() => {
    inputRef.current?.focus()
  },[])
  return (
    <form onSubmit={onSubmitHandler} className="flex items-center  bg-[#FFFFFF]  space-x-4 rounded-lg">
      <input ref={inputRef} onChange={handleChange} value={reply} type="text" placeholder="Type your reply here" className="input mt-8 text-[#3A4374] input-bordered input-primary bg-[#F7F8FD] h-[5rem] w-full" />
        {isLoading ? <PulseLoader color="#AD1FEA" size={5}  /> : <ActionButton defVal={true} className="bg-[#AD1FEA]">
          post reply
        </ActionButton>}
    </form>
  )
}

export default AddReply