import useTab from "./useTab";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content if the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content if the Section 2",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTab(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
