import { useEffect } from 'react';
function Test(props) {
  console.log(props);
  const node = (
    <h2>title</h2>
  )
  // didMount
  useEffect(() => {
    setTimeout(() => {
      props.onMessage('子组件传递给父组件');
    }, 3000)
  }, [])
  return (
    <>
      测试数据
      { node }
    </>
  )
}

export default Test;