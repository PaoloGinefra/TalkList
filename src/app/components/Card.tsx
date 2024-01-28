import { TiDelete } from "react-icons/ti";

interface CardProps {
  title: string;
  topics: string[];
  setTopics: React.Dispatch<React.SetStateAction<string[]>>;
  isSelected?: boolean;
}


export default function Card({ title, topics, setTopics, isSelected }: CardProps) {
  return (
    <div className="text-center border rounded-xl overflow-hidden flex justify-center transition duration-500" style={{ transform: isSelected ? 'scale(1.1)' : 'scale(1)', backgroundColor: isSelected ? '#0e77c7' : '' }}>
      <input className=' bg-transparent text-center p-3 overflow-auto' type='text' value={title} onChange={
        (e) => {
          const newTopics = [...topics];
          newTopics[newTopics.indexOf(title)] = e.target.value;
          setTopics(newTopics);
        }
      } />

      <button className='text-6xl text-center transition opacity-20 scale-75 hover:opacity-100 hover:scale-100' onClick={() => {
        setTopics(topics.filter((topic) => topic != title));
      }}>

        <TiDelete />
      </button>
    </div>
  );
}
