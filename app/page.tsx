import RegisterMyEmailButton from './components/RegisterMyEmailButton/RegisterMyEmailButton';

export default function Home() {
  return (
    <div className='home'>
      <div>
        <input type='email' placeholder='type your email here...' />
        <RegisterMyEmailButton />
      </div>
    </div>
  );
}
