interface ISubmit {
  onClick: () => void;
}

function Submit({ onClick }: ISubmit) {
  return <button onClick={onClick}>Submit</button>;
}

export { Submit };
