import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "@/src/layout/dashboard/Layout";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Cross from "@/src/assets/cross";
import { useRouter } from "next/router";
import { ReactDialogBox } from "react-js-dialog-box";

import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/src/components/config/firebase";

const defaultValues = {
  surname: "",
  firstname: "",
  email: "",
  department: "",
  gender: "",
  salary: "",
};
export default function Manage_Employee({ data }) {
  const schema = Yup.object().shape({
    surname: Yup.string().required("Surname is Required"),
    firstname: Yup.string().required("Firstname is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    department: Yup.string().min(1, "Select Department"),
    gender: Yup.string().min(1, "Select Gender"),
    salary: Yup.string().required("Field is required"),
  });
  const router = useRouter();
  // const [userData, setUserData] = useState();
  const { manageBox, setManageBox, employees, setEmployees } =
    useContext(UserContext);

  //Handle Sumbit
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("surname", data.surname);
    setValue("firstname", data.firstname);
    setValue("email", data.email);
    setValue("department", data.department);
    setValue("gender", data.gender);
    setValue("salary", data.salary);
  }, []);

  // Update Function

  const onSubmit = async (formData) => {
    const { created_on, uuid, emp_id } = data;

    try {
      const updateEmp = {
        created_on,
        uuid,
        emp_id,
        ...formData, // onSubmit gives us form data, useful it take care of changed values in manage-dialogue box
      };

      // return newList array with updateEmp object and rest of objects as it is
      const newList = employees.map((emp) =>
        emp.uuid === updateEmp.uuid ? updateEmp : emp
      );
      setEmployees(newList);
      setManageBox(false);
      await updateDoc(doc(db, "employees", updateEmp.uuid), updateEmp);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Function
  const deleteDetail = async () => {
    setManageBox(true);

    try {
      //loop through employees array and return newList that exclude object having uuid==data.uuid
      const newList = employees.filter((emp) => emp.uuid != data.uuid && emp);
      setEmployees(newList);
      await deleteDoc(doc(db, "employees", data.uuid));
    } catch (error) {
      console.log(error);
    } finally {
      setManageBox(false);
    }
  };

  return (
    <div>
      <ReactDialogBox
        closeBox={() => manageBox}
        modalWidth="1"
        headerBackgroundColor="transparent"
        headerTextColor="transparent"
        headerHeight="0"
        closeButtonColor="transparent"
        bodyBackgroundColor="transparent"
        bodyTextColor="black"
        bodyHeight="0%"

        // headerText="Title"
      >
        <div className="grid justify-center bg-white">
          <div className="flex justify-center pb-16 pt-14">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-md  pl-8 pr-8 pb-7 "
            >
              <div className="py-3">
                <button onClick={() => setManageBox(!manageBox)}>
                  <Cross />
                </button>
              </div>
              <div className="flex flex-col max-w-[338px]">
                <label
                  className="text-[#000000]/40 text-sm font-bold"
                  htmlFor="surname"
                >
                  Surname
                </label>
                <input
                  onChange={(e) => watch("surname", e.target.value)}
                  {...register("surname")}
                  placeholder="surname"
                  className=" border-1 border-[#C4C4C4] pt-2 p-1 border-2 border-solid "
                />
                {errors.surname && (
                  <p className="text-red-400">{errors.surname.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="firstname"
                  className="text-[#000000]/40 text-sm font-bold pt-4"
                >
                  Firstname
                </label>
                <input
                  {...register("firstname")}
                  placeholder="First Name"
                  className="max-w-[338px]  border-[#C4C4C4] pt-2 p-1 border-2 "
                />
                {errors.firstname && (
                  <p className="text-red-400">{errors.firstname.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[#000000]/40 text-sm font-bold pt-4"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="max-w-[338px]  border-[#C4C4C4] pt-2 p-1 border-2 "
                />
                {errors.email && (
                  <p className="text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="department"
                  className="text-[#000000]/40 text-sm font-bold pt-4"
                >
                  Department
                </label>

                <select
                  {...register("department")}
                  className="max-w-[338px] border-2 border-[#C4C4C4]  p-1"
                >
                  <option value="">Select Department</option>
                  <option>Teaching</option>
                  <option>Administration</option>
                  <option>Security</option>
                </select>
                {errors.department && (
                  <p className="text-red-400">{errors.department.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="gender"
                  className="text-[#000000]/40 text-sm font-bold pt-4"
                >
                  Gender
                </label>

                <select
                  {...register("gender")}
                  className="max-w-[338px] border-2 border-[#C4C4C4]  p-1"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-400">{errors.gender.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="salary"
                  className="text-[#000000]/40 text-sm font-bold pt-4"
                >
                  Salary
                </label>
                <input
                  {...register("salary")}
                  placeholder="Salary"
                  className="max-w-[338px] border-2 border-[#C4C4C4] pt-2 p-1 border-1 "
                />
                {errors.salary && (
                  <p className="text-red-400">{errors.salary.message}</p>
                )}

                <div className="flex justify-evenly pt-9 gap-12">
                  <button
                    type="submit"
                    className="bg-[#074279] text-white text-base font-semibold rounded-full py-2 px-11"
                  >
                    Update
                  </button>

                  <button
                    onClick={deleteDetail}
                    className="bg-[#AB2424] text-white text-base font-semibold p-1 rounded-full py-2 px-11"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ReactDialogBox>
    </div>
  );
}
