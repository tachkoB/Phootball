self.onmessage = (props) => {
    console.log('what props am I getting', props)
    self.postMessage({
      answer: 42,
    });
  };

  export {}