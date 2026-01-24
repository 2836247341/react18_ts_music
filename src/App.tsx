import React, { Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import routes from './router';
import store, { useAppSelector } from './store';
import { changeMessageAction } from './store/modules/counter';

function App() {
  const { count, message } = useAppSelector((state) => state.counter, shallowEqual)
  const dispatch = useDispatch()
  const handleChangeMessage = () => {
    dispatch(changeMessageAction("hello redux2"))
  }
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <div>当前计数: {count}</div>
      <div>当前消息: {message}</div>
      <button onClick={handleChangeMessage}>改变消息</button>
      <Suspense fallback="">
        <div className="main">
          {useRoutes(routes)}
        </div>
      </Suspense>
    </div>
  )
}

export default App
