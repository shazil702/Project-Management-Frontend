const TLNav = () => {
    return (
        <div className="bg-purple-800 flex justify-between items-center px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-white px-4 py-2 rounded-full w-1/3"
          />
          <div className="flex items-center space-x-4">
            <span className="text-white">Tl Name</span>
            <img
              src="profile_image_url"
              alt="TL Name"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      );
}

export default TLNav;