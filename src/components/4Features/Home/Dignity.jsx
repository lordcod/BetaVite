import Avatar from '@/components/5Entities/Assets/1.webp';
export default function Dignity() {
  return (
    <div className='grid grid-cols-2 gap-16 '>
      <div className='flex items-center'>
        <img
          src={Avatar}
          className='w-full max-h-64 rounded'
        />
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <h1 className='text-4xl font-bold'>
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem placeat
          officia architecto dignissimos sed, ipsam perspiciatis voluptatum
          magnam exercitationem quam debitis id pariatur consequuntur, tempora
          ducimus? Cumque dolor eius optio?Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Rem placeat officia architecto
          dignissimos sed, ipsam perspiciatis voluptatum magnam exercitationem
          quam debitis id pariatur consequuntur, tempora ducimus? Cumque dolor
          eius optio?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Rem placeat
        </p>
      </div>
    </div>
  );
}
