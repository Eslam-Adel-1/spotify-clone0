import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProfileTabs from "../Components/ProfileTabs.jsx";

// React Imports
import { useState, useContext } from "react";

// Default Image Import
import ProfilePic from "../../assets/images/Default_Image.png";

// react router imports
import { useNavigate } from "react-router-dom";

// Toast Imports
import { toast } from "react-hot-toast";
import {
  handleUserLogout,
  handleResetPassword,
  handleChangeName,
  handleProfileImage,
} from "../../lib/userApiCalls.js";

// loaders imports
import PageLoader from "../Components/Loaders.jsx";

// React Hook Form Imports
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "../../lib/zodSchemas.js";

// userContext imports
import { userContext } from "../../useContext/userContext.jsx";

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

const ProfileDialog = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button variant="outline">{children}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] px-auto">
        <DialogHeader>
          <DialogTitle>
            <p className="font-[Spotify]">Edit profile</p>
          </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ProfileTabs
          content1={<AccountTabContent />}
          content2={<PasswordTabContent />}
          content3={<ProfileTabContent />}
        />

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

export const PasswordTabContent = () => {
  // LOGIC

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setLoading(true);
    const { confirmPassword, password, oldPassword } = data;
    try {
      if (!oldPassword || !password || !confirmPassword) {
        throw new Error("Please fill all the fields");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const response = await handleResetPassword(data);
      toast.success(response);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // = = = = = = = = = = = = = = = = = = =

  // UI

  return (
    <form className="grid gap-4 py-4 pr-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-left w-10">
          Old Password
        </Label>
        <Input
          {...register("oldPassword")}
          id="name"
          type="password"
          className="col-span-3"
          placeholder=" ******* "
        />
        <p className="w-full col-span-3 text-red-500 ">
          {errors?.oldPassword?.message}
        </p>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="password" className="text-left w-10">
          New Password
        </Label>
        <Input
          {...register("password")}
          id="password"
          type="password"
          className="col-span-3"
          placeholder=" ******* "
        />
        <p className="w-full col-span-3 text-red-500 ">
          {errors?.password?.message}
        </p>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="confirmPassword" className="text-left w-10">
          Confirm Password
        </Label>
        <Input
          {...register("confirmPassword")}
          id="confirmPassword"
          type="password"
          className="col-span-3"
          placeholder=" ******* "
        />
        <p className="w-full col-span-3 text-red-500 ">
          {errors?.confirmPassword?.message}
        </p>
      </div>
      {loading ? (
        <PageLoader />
      ) : (
        <button className="ml-auto mr-5 w-fit bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Save Changes
        </button>
      )}
    </form>
  );
};

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

export const AccountTabContent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(userContext);
  const [name, setName] = useState("");

  const handleLogout = async () => {
    try {
      const response = await handleUserLogout();
      toast.success(response);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const changeName = async () => {
    setLoading(true);

    try {
      if (!name) {
        throw new Error("Please enter a name");
      }
      const response = await handleChangeName(name);
      toast.success(response);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-4 py-4 pr-3">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-left w-10">
          Name
        </Label>
        <Input
          placeholder={user.name}
          id="name"
          onChange={(e) => setName(e.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-left">
          Email
        </Label>
        <Input
          id="email"
          className="col-span-3 text-gray-500"
          value={user?.email}
        />
      </div>

      <button
        className=" w-fit bg-white border font-semibold border-red-500 text-red-600 p-1 px-4 rounded-sm transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleLogout}
      >
        Log Out
      </button>
      {loading ? (
        <PageLoader />
      ) : (
        <button
          className="ml-auto mr-5 w-fit bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          onClick={changeName}
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

export const ProfileTabContent = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePic, setImagePic] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(userContext);

  const handleUploadImage = async () => {
    setLoading(true);
    try {
      if (!imageFile) {
        throw new Error("Please select an image");
      }
      const data = new FormData();
      data.append("profile-image", imageFile);
      const image = await handleProfileImage(data);
      setUser((prevUser) => ({ ...prevUser, image }));
      toast.success("Image uploaded successfully");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    setImagePic(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <img
        src={imagePic || user.image || ProfilePic}
        alt="profile-image"
        className="w-28 h-28"
      />

      {loading ? (
        <PageLoader />
      ) : (
        <>
          <input
            id="image_input"
            type="file"
            onChange={(e) => handleOnChange(e)}
          />
          <button
            className="ml-auto mr-5 w-fit bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleUploadImage}
          >
            Save Changes
          </button>
        </>
      )}
    </div>
  );
};

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
