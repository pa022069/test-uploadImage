import axios from "axios";

const App = (): JSX.Element => {
  const uploadFile = async (e: any) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("imageSrc", file, `name-${Date.now()}.png`);
    formData.append("name", "name");
    try {
      const response = await axios({
        method: "POST",
        url: "https://jeffrey-work.com/api",
        data: formData,
      });
      window.open(
        `https://jeffrey-work.com/share?shareImg=${response.data.shareImg}`
      );
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input type="file" accept="image/*" onChange={uploadFile} />
    </div>
  );
};

export default App;
