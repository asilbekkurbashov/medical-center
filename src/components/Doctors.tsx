import { doctor_info, doctors } from "../shared/data/data";
import UiSelect from "../shared/ui/uiSelect/UiSelect";
import DoctorInfo from "./DoctorInfo";
import UIButton from "../shared/ui/uiButton/UIButton";

const Doctors = () => {
  const handleChange = () => {};

  return (
    <div className="flex  flex-col mt-4">
      <div className="flex gap-8 items-center">
        <p className="font-semibold text-4xl">Врачи</p>
        <UiSelect
          defaultValue={doctors[0]}
          onChange={handleChange}
          style={{ width: "140px" }}
          options={doctors.map((doctor) => ({ value: doctor }))}
        />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-6">
        <DoctorInfo arr={doctor_info}/>
      </div>
      <div className="flex items-center justify-center mt-8">
        <UIButton>Показать еще</UIButton>
      </div>
    </div>
  );
};

export default Doctors;
