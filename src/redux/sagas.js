import { takeEvery, call, put } from 'redux-saga/effects';

const fetchPostsApi = () =>
  fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json());
function* fetchPosts() {
  try {
    console.log('fetching');
    const response = yield call(fetchPostsApi);

    yield put({ type: 'FETCH_POSTS_SUCCES', payload: response });
  } catch (er) {
    yield put({ type: 'FETCH_POSTS_FAILURE', payload: er.message });
  }
}

function* watchFetchPosts() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPosts);
}

export default function* rootSaga() {
  yield watchFetchPosts();
}
