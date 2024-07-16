import Invite from '../UI/Invite';

export default function Dignity(props) {
  return (
    <div className={`dignity ${props.postition == 'left' ? 'left' : 'right'}`}>
      {/* <div className='flex items-center justify-center'> */}
      {props.image}
      {/* <img
          src={props.image}
          srcSet={`${props.imgs} 128w, ${props.imgm} 256w, ${props.imgb} 384w, ${props.imgl} 512w`}
          className='max-h-64 rounded'
          alt='dignity'
          height='100%'
          sizes='100vw'
        /> */}
      {/* </div> */}
      <div className='flex flex-col justify-center gap-4'>
        <h2 className='text-4xl font-bold text-center'>{props.title}</h2>
        <p>{props.body}</p>
        <Invite />
      </div>
    </div>
  );
}
