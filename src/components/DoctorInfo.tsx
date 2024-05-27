import { Link } from "react-router-dom";
import { arrow } from "../assets";
import { doc } from "../shared/types";
import { useAppContext } from "../state/AppContextProvider";

interface I_Props {
  arr: doc[]
}

const DoctorInfo = (props:I_Props) => {
  const {arr} = props;
  const {setCurrentDoctor} = useAppContext()
  const handleClick = (id:string) => {
    const value = arr.filter((elem) => elem.id === id)
    setCurrentDoctor(value[0])
  }
  return (
    <>
      {arr.map((doctor,index) => (
        <div key={index} className="rounded-xl overflow-hidden bg-light-1">
          <div className="h-[241px]">
            <img src={doctor.image} className="min-w-full max-h-full box-border" alt="photo" />
          </div>
          <div className="p-6">
            <p className="font-semibold text-xl mb-2">{doctor.name}</p>
            <p className="mb-1 text-[14px]"><span className="text-gray-400">Должность:</span> {doctor.title}</p>
            <p className="mb-1 text-[14px]"><span className="text-gray-400">Мед. учреждение:</span> {doctor.work}</p>
            <p className="mb-1 text-[14px]"><span className="text-gray-400">Адрес:</span> {doctor.address}</p>
            <p className="mb-1 text-[14px]"><span className="text-gray-400">Специальность:</span> {doctor.job}</p>
            <Link to={`/${doctor.id}`} onClick={() =>handleClick(doctor.id)} className="flex gap-2 text-blue items-center mt-4">
                <span>Записаться на прием </span>
                <img src={arrow} alt="" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoctorInfo;
