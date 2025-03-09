// Icons imports
import { IoHomeSharp } from "react-icons/io5";
import { HiViewfinderCircle } from "react-icons/hi2";
import { FaRadio, FaPodcast, FaLaptopFile } from "react-icons/fa6";
import { IoMdAlbums } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdLibraryMusic, MdCreateNewFolder } from "react-icons/md";

// Singers images imports
import singer1 from "../assets/images/Popular singers/1.jpg";
import singer2 from "../assets/images/Popular singers/2.jpg";
import singer3 from "../assets/images/Popular singers/3.jpg";
import singer4 from "../assets/images/Popular singers/4.jpg";
import singer5 from "../assets/images/Popular singers/5.jpg";
import singer6 from "../assets/images/Popular singers/6.jpg";

// Album images imports
import album1 from "../assets/images/random songs covers/1.jpg";
import album2 from "../assets/images/random songs covers/2.jpg";
import album3 from "../assets/images/random songs covers/3.jpg";
import album4 from "../assets/images/random songs covers/4.jpg";
import album5 from "../assets/images/random songs covers/5.jpg";
import album6 from "../assets/images/random songs covers/6.jpg";

// Album covers
import Cairokee_Album from "../assets/Albums/Cairokee/Cairokee_Album.jpg";
import Amr_Diab_Album from "../assets/Albums/Amr_Diab/Amr-Diab-Album.jpg";
import Afroto from "../assets/Albums/Afroto/Afroto.jpg";

// Amr Diab Songs imports
import Tamaly_Maak from "../assets/songs/Tamaly-Maak/Tamaly-Maak.mp3";
import Tamaly_Maak_Cover from "../assets/songs/Tamaly-Maak/Tamaly-Maak.jpg";
//---------------------
import El_haz from "../assets/songs/El-haz/El-haz.mp3";
import El_haz_Cover from "../assets/songs/El-haz/El-haz.jpg";
//---------------------
import Shokran from "../assets/songs/Shokran/Shokran.mp3";
import Shokran_Cover from "../assets/songs/Shokran/Shokran.jpg";

// Afroto Songs imports
import Afroto_Kebda from "../assets/songs/Afroto-Kebda/Afroto-kebda.mp3";
import Afroto_Kebda_Cover from "../assets/songs/Afroto-Kebda/Afroto-kebda.jpg";
//---------------------
import Mesh_Bel_Hezoz from "../assets/songs/Mesh_Bel_Hzoz/Mesh_Bel_Hzoz.mp3";
import Mesh_Bel_Hezoz_Cover from "../assets/songs/Mesh_Bel_Hzoz/Mesh_Bel_Hzoz.jpg";
//---------------------
import Ala_Bady from "../assets/songs/Ala Bady/Ala_Bady.mp3";
import Ala_Bady_Cover from "../assets/songs/Ala Bady/Ala_Bady.jpg";
//---------------------
import Far2_Khebra from "../assets/songs/Far2_Khebra/Far2_Khebra.mp3";
import Far2_Khebra_Cover from "../assets/songs/Far2_Khebra/Far2_Khebra.jpg";
//---------------------
import Sogara from "../assets/songs/Sogara/Sogara.mp3";
import Sogara_Cover from "../assets/songs/Sogara/Sogara.jpg";

// Cairokee Songs imports
import Kan_Lak_Maya_Cover from "../assets/songs/Kan-Lak-Maya/Kan-Lak-Maya.jpg";
import Kan_Lak_Maya from "../assets/songs/Kan-Lak-Maya/Kan-Lak-Maya.mp3";
//---------------------
import Dinasour from "../assets/songs/Dinasour/Dinasour.mp3";
import Dinasour_Cover from "../assets/songs/Dinasour/Dinasour.jpg";
//---------------------
import El_keef from "../assets/songs/El-keef/El-keef.mp3";
import El_keef_Cover from "../assets/songs/El-keef/El-keef.jpg";
//---------------------
import El_sekka_shmal from "../assets/songs/El-sekka-shmal/El-sekka-shmal.mp3";
import El_sekka_shmal_Cover from "../assets/songs/El-sekka-shmal/El-sekka-shmal.jpg";
//---------------------
import Roma from "../assets/songs/Roma/Roma.mp3";
import Roma_Cover from "../assets/songs/Roma/Roma.jpg";

export const sidbarItems = [
  {
    name: "Home",
    Icon: <IoHomeSharp className="w-5 h-5 flex-shrink-0" />,
  },
  {
    name: "Search",
    Icon: <HiViewfinderCircle className="w-5 h-5 flex-shrink-0" />,
  },
  {
    name: "Your Library",
    Icon: <MdLibraryMusic className="w-5 h-5 flex-shrink-0" />,
  },
  {
    name: "Create Playlist",
    Icon: <MdCreateNewFolder className="w-5 h-5 flex-shrink-0" />,
  },
  {
    name: "Liked Songs",
    Icon: <FaRegHeart className="w-5 h-5 flex-shrink-0" />,
  },
];

//----------------------------

export const library = [
  {
    name: "Radio",
    Icon: <FaRadio className="w-5 h-5" />,
  },
  {
    name: "Podcast",
    Icon: <FaPodcast className="w-5 h-5" />,
  },
  {
    name: "Local Files",
    Icon: <FaLaptopFile className="w-5 h-5" />,
  },
];

//----------------------------

export const playlists = [
  {
    name: "Playlist 1",
    Icon: <IoMdAlbums className="w-5 h-5" />,
  },
  {
    name: "Playlist 2",
    Icon: <IoMdAlbums className="w-5 h-5" />,
  },
  {
    name: "Playlist 3",
    Icon: <IoMdAlbums className="w-5 h-5" />,
  },
];

//----------------------------

export const users = [
  {
    name: "John Doo",
    image: null,
  },
  {
    name: "Sam Smith",
    image: singer2,
  },
  {
    name: "Sarah Smith",
    image: singer3,
  },
];

export const convo = [
  {
    name: "Eslam",
    role: "user",
    image: singer1,
    message: "hello234",
  },
  {
    name: "Amr",
    role: "user2",
    image: singer2,
    message: "hi",
  },
  {
    name: "Eslam",
    role: "user",
    image: singer1,
    message: "hello",
  },
];
//----------------------------

export const singersArray = [
  {
    name: "Amr Diab",
    image: singer1,
    title: "Singer",
  },
  {
    name: "Baha Sultan",
    image: singer2,
    title: "Singer",
  },
  {
    name: "Ramy Sabry",
    image: singer3,
    title: "Singer",
  },
  {
    name: "Essam Sasa",
    image: singer4,
    title: "Singer",
  },
  {
    name: "Ahmed Saad",
    image: singer5,
    title: "Singer",
  },
  {
    name: "Wael Gasar",
    image: singer6,
    title: "Singer",
  },
];

//----------------------------

export const Albums = [
  {
    name: "Top",
    image: album1,
  },
  {
    name: "Arabia Equal",
    image: album2,
  },
  {
    name: "New Egyptian",
    image: album3,
  },
  {
    name: "Mlook Elseen",
    image: album4,
  },
  {
    name: "Popular",
    image: album5,
  },
  {
    name: "Series songs",
    image: album6,
  },
];

//----------------------------

export const popular_songs = [
  {
    song_name: "Tamaly Maak",
    artist: "Amr Diab",
    songSrc: Tamaly_Maak,
    cover: Tamaly_Maak_Cover,
  },
  {
    song_name: "Kebda",
    artist: "Afroto",
    songSrc: Afroto_Kebda,
    cover: Afroto_Kebda_Cover,
  },
  {
    song_name: "Kan Lak Maya",
    artist: "Cairokee",
    songSrc: Kan_Lak_Maya,
    cover: Kan_Lak_Maya_Cover,
  },
  {
    song_name: "Shokran",
    artist: "Amr Diab",
    songSrc: Shokran,
    cover: Shokran_Cover,
  },
  {
    song_name: "Dinasour",
    artist: "Cairokee",
    songSrc: Dinasour,
    cover: Dinasour_Cover,
  },
  {
    song_name: "El-haz",
    artist: "Amr Diab",
    songSrc: El_haz,
    cover: El_haz_Cover,
  },
  {
    song_name: "El-sekka-shmal",
    artist: "Cairokee",
    songSrc: El_sekka_shmal,
    cover: El_sekka_shmal_Cover,
  },
  {
    song_name: "El keef",
    artist: "Cairokee",
    songSrc: El_keef,
    cover: El_keef_Cover,
  },
  {
    song_name: "Roma",
    artist: "Cairokee",
    songSrc: Roma,
    cover: Roma_Cover,
  },
];

//----------------------------

export const popular_albums = [
  {
    name: "This is Cairokee",
    artist: "Cairokee",
    image: Cairokee_Album,
    songs: [
      {
        song_name: "Kan Lak Maya",
        artist: "Cairokee",
        songSrc: Kan_Lak_Maya,
        cover: Kan_Lak_Maya_Cover,
        duration: "4:45",
      },
      {
        song_name: "Roma",
        artist: "Cairokee",
        songSrc: Roma,
        cover: Roma_Cover,
        duration: "3:21",
      },
      {
        song_name: "El keef",
        artist: "Cairokee",
        songSrc: El_keef,
        cover: El_keef_Cover,
        duration: "2:45",
      },
      {
        song_name: "El-sekka-shmal",
        artist: "Cairokee",
        songSrc: El_sekka_shmal,
        cover: El_sekka_shmal_Cover,
        duration: "3:18",
      },
      {
        song_name: "Dinasour",
        artist: "Cairokee",
        songSrc: Dinasour,
        cover: Dinasour_Cover,
        duration: "3:37",
      },
    ],
  },
  {
    name: "This is Amr Diab",
    artist: "Amr Diab",
    image: Amr_Diab_Album,
    songs: [
      {
        song_name: "Tamaly Maak",
        artist: "Amr Diab",
        songSrc: Tamaly_Maak,
        cover: Tamaly_Maak_Cover,
        duration: "4:45",
      },
      {
        song_name: "Shokran",
        artist: "Amr Diab",
        songSrc: Shokran,
        cover: Shokran_Cover,
        duration: "3:21",
      },
      {
        song_name: "El-haz",
        artist: "Amr Diab",
        songSrc: El_haz,
        cover: El_haz_Cover,
        duration: "3:21",
      },
    ],
  },
  {
    name: "This is Afroto",
    artist: "Afroto",
    image: Afroto,
    songs: [
      {
        song_name: "Kebda",
        artist: "Afroto",
        songSrc: Afroto_Kebda,
        cover: Afroto_Kebda_Cover,
        duration: "4:45",
      },
      {
        song_name: "Sogara",
        artist: "Afroto",
        songSrc: Sogara,
        cover: Sogara_Cover,
        duration: "4:45",
      },
      {
        song_name: "Mesh Bel Hezoz",
        artist: "Afroto",
        songSrc: Mesh_Bel_Hezoz,
        cover: Mesh_Bel_Hezoz_Cover,
        duration: "4:45",
      },
      {
        song_name: "Ala Bady",
        artist: "Afroto",
        songSrc: Ala_Bady,
        cover: Ala_Bady_Cover,
        duration: "4:45",
      },
      {
        song_name: "Far2 Khebra",
        artist: "Afroto",
        songSrc: Far2_Khebra,
        cover: Far2_Khebra_Cover,
        duration: "4:45",
      },
    ],
  },
];

//=====================================

export const random_colors = [
  "from-[#fc59a3]",
  "from-[#ffd400]",
  "from-[#87c830]",
  "from-[#fc59a3]",
  "from-[#8e3ccb]",
  "from-[#ff3155]",
  "from-[#2daefd]",
  "from-[#49f770]",
];
