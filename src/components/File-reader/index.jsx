import React, { useEffect, useState } from "react";
import Input from "../Form/Input";
import { Container } from "./styles";
import TitleSection from "../Title-section";

const FileReaderComponent = () => {
  const [fileState, setFileState] = useState({
    length: 0,
    totalOfWords: 0,
    totalOfCharacters: 0,
  });

  function readFile(event) {
    const {
      target: { files },
    } = event;

    const reader = new FileReader();
    reader.readAsText(files[0]);

    console.log("files[0]", files[0]);

    reader.onloadend = () => {
      setFileState((prevState) => ({
        ...prevState,
        fileName: files[0].name,
        fileContant: reader.result,
        length: files[0].size,
      }));
    };
  }

  useEffect(() => {
    if (fileState.length) {
      const { fileContant: contant } = fileState;
      const numOfWords = contant.split(" ").length;
      const numOfCharacters = contant.replace(/[^a-zA-Z0-9]/g, "").length;
      setFileState((prevState) => ({
        ...prevState,
        length: 0,
        totalOfWords: numOfWords || 0,
        totalOfCharacters: numOfCharacters || 0,
      }));
    }
  }, [fileState]);

  return (
    <Container>
      <TitleSection label="File Reader" />
      <Input type="file" accept=".txt" onChange={readFile} />
      <Container>
        <span>Words count {fileState.totalOfWords}</span>
        <span>Characters count {fileState.totalOfCharacters}</span>
      </Container>
    </Container>
  );
};

export default FileReaderComponent;
