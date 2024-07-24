export const Components6 = () => {
  const newwssws = () => {};

  const newwssws22 = () => {
    return 'privet';
  };
  return <>hello pitereeee</>;
};

export const getWhateverRequest = () =>
  new RestRequest().getRequest({
    endpoint: TODO_ENDPOINT,
    responseSchema: Joi.object({
      todos: Joi.array().items(
        Joi.object({
          id: Joi.number(),
          title: Joi.string(),
          description: Joi.string(),
          date: Joi.string(),
        }),
      ),
    }),
  });

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
