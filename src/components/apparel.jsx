import { Auth } from "./auth";
import { db, auth, storage } from "../firebase-config";
import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
const Apparel = () => {
  const [movieList, setMovieList] = useState([]);
  // newMovieState
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [newMovieOscar, setNewMovieOscar] = useState(false);

  // Updata Title State
  const [updateTitle, setUpdateTitle] = useState("");

  // Add Image State
  const [fileUpload, setFileUpload] = useState(null);
  const moviesCollectionRef = collection(db, "movies");

  // Function To Read Database
  const getMovieList = async () => {
    // Read Data
    //   Set Movie List
    try {
      const data = await getDocs(moviesCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filterData);
      setMovieList(filterData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovieList();
  }, []);

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        date: newReleaseDate,
        oscar: newMovieOscar,
        userId: auth?.currentUser?.uid,
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };
  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    setMovieList(movieList.filter((movie) => movie.id !== id));
  };

  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, { title: updateTitle });
  };

  // File Upload
  const uploadFile = async () => {
    // jika tidak ada file kita hanya return function ini
    if (!fileUpload) return;
    const fileFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(fileFolderRef, fileUpload);
      console.log("file uploaded");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Auth />

      <div>
        <input
          type="text"
          placeholder="Movie Title"
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Realease Date..."
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={newMovieOscar}
          onChange={(e) => setNewMovieOscar(e.target.checked)}
        />
        <label> Received An Oscar</label>
        <button onClick={onSubmitMovie}>Submit</button>
      </div>
      <div>
        {movieList.map((movie) => (
          <div className="card">
            <h1>{movie.title}</h1>
            <h2>Date : {movie.date}</h2>
            <button
              onClick={() => {
                deleteMovie(movie.id);
              }}
            >
              Delete
            </button>
            <input
              type="text"
              placeholder="Update Title..."
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
            <button onClick={() => updateMovieTitle(movie.id)}>
              Update Title
            </button>
          </div>
        ))}
      </div>
      <div>
        <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
        <button onClick={uploadFile}>Upload File</button>
      </div>
    </div>
  );
};
export default Apparel;
