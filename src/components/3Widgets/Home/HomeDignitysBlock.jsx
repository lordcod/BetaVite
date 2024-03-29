import Dignity from '../../4Features/Home/Dignity';

export default function HomeDignitysBlock() {
  return (
    <div className='size-limit mx-auto flex flex-col gap-4 m-4 [&>div:nth-child(even)>div:first-child]:order-1 px-8 pt-8'>
      <Dignity />
      <Dignity />
      <Dignity />
      <Dignity />
      <Dignity />
      <Dignity />
    </div>
  );
}
