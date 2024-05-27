import { useParams } from "react-router-dom";
import { dates, doctor_info } from "../shared/data/data";
import DoctorInfo from "./DoctorInfo";
import { useAppContext } from "../state/AppContextProvider";
import UIButton from "../shared/ui/uiButton/UIButton";
import { date_hour } from "../shared/types";

const MoreInfo = () => {
  const id = useParams();
  const { currentDoctor,hour, setHour } = useAppContext();
  const otherDoctors = doctor_info.filter((doc) => doc.id !== id.id);
  const handleClick = (elem:date_hour,index:number) => {
    setHour(`${elem.date}, ${elem.hour[index]}`)
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="grid grid-cols-2">
        <div className="w-[600px] max-h-[340px] rounded-xl overflow-hidden">
          <img
            src={currentDoctor.image}
            className="min-w-full max-h-full"
            alt="photo"
          />
        </div>
        <div>
          <p className="font-semibold text-2xl mb-4">{currentDoctor.name}</p>
          <div className="mb-2">
            <p className="text-gray-400">Должность:</p>
            <p>{currentDoctor.title}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-400">Мед. учреждение::</p>
            <p>{currentDoctor.work}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-400">Адрес:</p>
            <p>{currentDoctor.address}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-400">Специальность:</p>
            <p>{currentDoctor.job}</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {dates.map((date) => (
          <div key={date.date} className="mb-4">
            <p className="font-semibold text-lg pb-2">{date.date}</p>
            <div className="flex gap-2 flex-wrap">
              {date.hour.map((elem,index) => (
                <p
                  onClick={() => handleClick(date,index)}
                  key={index}
                  className={`${'bg-blue-light  px-4 py-1 cursor-pointer rounded-md'}`}
                >
                  {elem}
                </p>
              ))}
            </div>
          </div>
        ))}
        <UIButton disabled={Boolean(!hour)}>Выберите время приема</UIButton>
      </div>

      <p className="font-semibold text-4xl mt-10">Другие врачи</p>
      <div className="grid grid-cols-3 gap-8 mt-6">
        <DoctorInfo arr={otherDoctors} />
      </div>
    </div>
  );
};

export default MoreInfo;
