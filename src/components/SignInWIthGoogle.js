// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth, db } from "./Firebase";
// import { toast } from "react-toastify";
// import { setDoc, doc } from "firebase/firestore";

// function SignInwithGoogle() {
//   function googleLogin() {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider).then(async (result) => {
//       console.log(result);
//       const user = result.user;
//       if (result.user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: user.displayName,
//           photo: user.photoURL,
//           lastName: "",
//         });
//         toast.success("User logged in Successfully", {
//           position: "top-center",
//         });
//         window.location.href = "/home";
//       }
//     });
//   }
//   return (
//     <div>
//       <p className="continue-p">--Or continue with--</p>
//       <div
//         style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
//         onClick={googleLogin}
//       >
//         <img src={require("../google.png")} width="50%" alt=""/>
//       </div>
//     </div>
//   );
// }
// export default SignInwithGoogle;



import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./Firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/home";
      }
    });
  }
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={require("../google.png")} width="80%" alt=""/>
      </div>
    </div>
  );
}
export default SignInwithGoogle;