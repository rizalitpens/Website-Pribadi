import React, { useState, useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../App";

// Komponen Contact untuk menampilkan cara menghubungi dan media sosial
const Contact = ({ contactRef }) => {
  // Mengakses context AnimationContext untuk animasi bagian yang muncul
  const { visibleSections, observeSections } = useContext(AnimationContext);

  // Referensi untuk bagian judul dan deskripsi
  const hubungiRef = useRef(null);
  const kunjungiRef = useRef(null);
  const descHubRefs = useRef(null);
  const descKunjRefs = useRef(null);

  // Menggunakan hook useEffect untuk mengamati perubahan pada elemen yang dirujuk
  useEffect(() => {
    // observeSections mengatur elemen yang diamati dan threshold untuk animasi
    observeSections([hubungiRef, kunjungiRef, descHubRefs, descKunjRefs], [0.2]); // Threshold diubah menjadi 0.2
  }, [observeSections]);
  
  // State untuk melacak item yang sedang di-hover
  const [hoveredItem, setHoveredItem] = useState(null);

  // Daftar metode kontak yang tersedia
  const contactMethods = [
    { name: 'Email', img: 'gmail-putih.png', description: 'Hubungi Saya melalui email.', link: 'mailto:rizalmaulanaairlanggad4itb2024@gmail.com' },
    { name: 'WhatsApp', img: 'whatsapp-putih.png', description: 'Chat Saya melalui WhatsApp.', link: 'https://wa.me/+6285730540210' },
  ];

  // Daftar media sosial yang dapat diikuti
  const socialMedia = [
    { name: 'Instagram', img: 'instagram-putih.png', description: 'Ikuti saya di Instagram.', link: 'https://www.instagram.com/a_rizal_i/' },
    { name: 'LinkIn', img: 'linkedin-putih.png', description: 'Kunjungi saya di LinkIn.', link: 'https://www.linkedin.com/in/rizal-maulana-airlangga-072b21346?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVQqWi0bbT%2FufpBPmWbv88w%3D%3D' },
  ];

  // Fungsi untuk merender elemen kontak atau media sosial
  const renderItems = (items) => (
    <div 
      className={`flex justify-center items-center gap-10 transition-transform duration-300`}
    >
      {/* Memetakan setiap item dan menampilkannya */}
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link} // Link tujuan
          target="_blank" // Membuka link di tab baru
          rel="noopener noreferrer" // Keamanan untuk membuka link
          className="flex flex-col justify-center items-center border-white border-2 rounded-3xl p-4 w-24 h-24 my-auto relative cursor-pointer hover:drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)] hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500"
          onMouseEnter={() => setHoveredItem(item.description)} // Mengatur deskripsi saat hover
          onMouseLeave={() => setHoveredItem(null)} // Menghapus deskripsi saat mouse keluar
        >
          {/* Menampilkan gambar dengan efek brightness */}
          <img src={item.img} alt={item.name} className="brightness-125 drop-shadow-md" />
          {/* Deskripsi yang muncul saat hover */}
          <div
            className={`absolute bottom-full mb-2 bg-zinc-700 text-white p-2 rounded-md text-center w-max transition-opacity duration-300 transform ${
              hoveredItem === item.description ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {item.description}
          </div>
        </a>
      ))}
    </div>
  );
  
  return (
    <div 
      className="xl:w-[96%] lg:w-[97%] md:w-[98%] w-full mx-auto scroll-smooth bg-gradient-to-b from-black/0 via-black/90 to-black pb-16 md:mt-36 sm:mt-10 md:pt-64 pt-60"
      ref={contactRef}
    >
      <div 
        className={`w-full text-white py-6 mt-4 mb-24 md:flex grid items-center justify-center xl:gap-80 lg:gap-48 md:gap-28 gap-0`}
      >
        <div className='grid'>
          {/* Bagian judul dengan teks "Hubungi Saya" */}
          <div 
            id="hubungi" // ID untuk judul
            ref={hubungiRef} // Menghubungkan referensi ke elemen ini
            className={`text-white text-3xl text-center font-medium lg:mb-10 md:mb-3  transition-transform duration-300 ${
              visibleSections["hubungi"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Hubungi Saya
          </div>
          {/* Render item kontak */}
          <div
            id="descHub" // ID untuk judul
            ref={descHubRefs} // Menghubungkan referensi ke elemen ini
            className={`w-full text-white py-6 mt-4 mb-24 md:flex grid items-center justify-center xl:gap-80 lg:gap-48 md:gap-16 sm:gap-36 transition-transform duration-300 ${
              visibleSections["descHub"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {renderItems(contactMethods)}          
          </div>

        </div>
        
        <div className='grid'>
          {/* Bagian judul dengan teks "Kunjungi Saya" */}
          <div 
            id="kunjungi" // ID untuk judul
            ref={kunjungiRef} // Menghubungkan referensi ke elemen ini
            className={`text-white text-3xl text-center font-medium lg:mb-10 md:mb-3  transition-transform duration-300 ${
              visibleSections["kunjungi"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Kunjungi Saya
          </div>
          {/* Render item media sosial */}
          <div
            id="descKunj" // ID untuk judul
            ref={descKunjRefs} // Menghubungkan referensi ke elemen ini
            className={`w-full text-white py-6 mt-4 mb-24 md:flex grid items-center justify-center xl:gap-80 lg:gap-48 md:gap-16 sm:gap-36 transition-transform duration-300 ${
              visibleSections["descKunj"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {renderItems(socialMedia)}
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Contact;
