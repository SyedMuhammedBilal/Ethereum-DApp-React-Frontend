import React, { useEffect, useState } from "react";
import { Contract_ABi, Contract_Address } from "./abi/smart.contract.config";
import Web3 from "web3";

const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

function App() {
  const [account, setAccount] = useState(); // state variable to set account.
  const [soFi, setSoFi] = useState(null);
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [buffer, setBuffer] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    async function loadWeb3() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);

      const soFi = new web3.eth.Contract(Contract_ABi, Contract_Address);
      setSoFi(soFi);

      const imageId = await soFi.methods.imageId().call();
      setImageId(imageId);

      for (let i = 1; i <= imageId; i++) {
        const posts = await soFi.methods.images(i).call();
        setImages((prevState) => [...prevState, posts]);
      }
      setLoading(false);
    }

    loadWeb3();
  }, []);

  const captureFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    };
  };

  console.log("buffer: ", images);

  const uploadPost = async (desc) => {
    console.log("Submitting file to ipfs...", buffer);

    try {
      const result = await ipfs.add(buffer);
      console.log('Ipfs result', result);
      setLoading(true);
      soFi.methods.uploadImage(result.path, desc).send({
        from: account
      }).on('transactionHash', (hash) => {
        setLoading(false)
      })
    } catch (error) {
      console.error(error)
    }

    // ipfs.add(buffer, (error, result) => {
    //   console.log("Result: ", result);

    //   if (error) {
    //     console.log(error);
    //     return;
    //   } else {
    //     soFi.methods
    //       .uploadImage(result[0]?.hash, desc)
    //       .send({
    //         from: account,
    //       })
    //       .on("transactionHash", (hash) => {
    //         setLoading(false);
    //       });
    //   }

    // });
  };

  return (
    <div>
      Your account is: {account}
      <div>
        <h5>Share your post</h5>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            uploadPost(text);
          }}
        >
          <input
            onChange={captureFile}
            type="file"
            accept=".jpg, .jpeg, .png, .bmp, .gif"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="what's in your mind???"
          />
          <input type="submit" />
        </form>
      </div>
      <div>
        {images?.map((image, index) => {
          return (
            <div key={index}>
              <img
                src={`https://ipfs.infura.io/ipfs/${image?.hash}`}
                alt="img"
              />
              <h4>{image?.author}</h4>
              <h4>{image?.description}</h4>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <p>Tips:</p>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
