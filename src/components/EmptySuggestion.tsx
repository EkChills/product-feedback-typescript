import illustration from '../assets/suggestions/illustration-empty.svg'
import AddFeedbackButton from './ui/AddFeedbackButton'

const EmptySuggestion = () => {
  return (
    <div className='px-[1.5rem] py-[2rem]  lg:px-0 flex flex-col space-y-[1rem]'>
      <div className='bg-white grid place-items-center py-[4.75rem] px-[1.5rem] rounded-lg'>
        <div className='flex flex-col items-center'>
          <img src={illustration} alt="empty illustration image" className='mb-[2.438rem] sm:mb-[3.313rem]' />
          <div className="flex space-x-[.875rem] sm:space-x-[1rem] flex-col text-center mb-[1.5rem] sm:mb-[3rem]">
            <h3 className='text-[#3A4374]  text-[1.125rem] font-bold sm:text-[1.5rem]'>there is no feedback yet</h3>
            <p className='card-title-desc'>Got a suggestion? Found a bug that needs to be squashed? <br/> We love hearing about new ideas to improve our app.</p>
          </div>
          <AddFeedbackButton>
            add feedback
          </AddFeedbackButton>
        </div>
      </div>
    </div>
  )
}

export default EmptySuggestion