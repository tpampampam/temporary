export const Components6 = () => {
  const newwssws = () => {};

  const newwssws22 = () => {
    return 'privet';
  };
  return <>hello pitereeee</>;
};

export const Todos: FC = () => {
  useEffect(() => {
    getWhateverRequest().then(data => console.log(data));
  }, []);

  return (
    <div className={cn(`${BLOCK_NAME}`)}>
      <Header />
      <TodoList />
    </div>
  );
};
