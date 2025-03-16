function Profile() {
  return (
    <div
      id="mhome"
      className="flex relative items-center flex-col gap-3 px-2 pt-2 md:hidden  "
    >
      <div className="profile-i w-full h-[40vh] bg-white rounded-2xl flex items-center justify-center  ">
        {" "}
        <img
          src="https://i.imgur.com/L0nvhpd.png"
          className="h-full object-cover"
          alt="Profile"
        />
        <h1
          style={{
            textShadow:
              "1px 1px 0 black, -1px -1px 0 black, -1px 1px 0 black, 1px -1px 0 black",
          }}
          className="text-center text-white absolute -bottom-2  text-[14vw] font-extrabold"
        >
          Aryan Singh
        </h1>
      </div>{" "}
      {/* <div className="profile-i   h-fit  w-full  ">
        
        <p className=" tracking-wider ">
          A Software Engineer who has developed countless innovative solutions.
        </p>
      </div> */}
    </div>
  );
}

export default Profile;
