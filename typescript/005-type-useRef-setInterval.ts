function Challenge20() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  //  if no "| null", the intervalRef.current is ready only

  const handleInput: React.FormEventHandler<HTMLInputElement> = (e) => {

    // 3. start new setInterview
    intervalRef.current = setInterval(() => {

    }, 500)

  }

  return (<div>


  </div>)
}

export default Challenge20;