import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="flex justify-between bg-black p-8">
            <div className="flex">
                <Link to="/">
                    <img
                        className="w-16"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOEjcM4Vd2ymzDlyzwd8hdvTGemuWY6hP85SA7saFOw&s"
                        alt="comp-logo"
                    />
                </Link>
                <ul className="pr-6 flex items-center text-white">
                    <Link to="/"><li className="px-3">Home</li></Link>
                    <Link to="/two_layer"><li className="px-3">3-layer Auth</li></Link>
                    <Link to="/steganography"><li className="px-3">Steganography</li></Link>
                    <Link to="/about"><li className="px-3">About</li></Link>
                </ul>
            </div>
        </div>
  )
}

export default Header;