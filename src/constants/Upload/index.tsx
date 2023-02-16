
import React, { useState } from "react";
import { Upload, notification } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

interface Image {
  setImageName:any;
  setPicture?:any;
}


const App: React.FC <Image> = ({setImageName, setPicture}) => {
  const [uploadNewFile, setNewUploadFile] = useState<boolean>(true);
  const onChange: UploadProps["onChange"] = (info: any) => {
    if (info.file.status !== "uploading") {
    }
    if (info.file.status === "done") {
      notification.success({ message: "File upload sucessfully" });
      setImageName(info.file.response.filename);
    } else if (info.file.status === "error") {
      notification.error({ message: "file upload failed." });
    }
    setNewUploadFile(prev =>!prev)
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
    <Upload
      name="imageFile"
      action="http://localhost:5000/product/upload"
      listType="picture-card"
      onChange={onChange}
      onPreview={onPreview} 
    >
      { uploadNewFile && "+ Upload"}
    </Upload>
    
    </>
  );
};

export default App;
