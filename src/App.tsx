import DraggableContainer from "./builder-components/draggable-container";
import DropZone from "./builder-components/drop-zone";
import TextInput from "./components/text-input";
import Widget from "./components/widget";

// Mantine Hook for dragging:
// https://mantine.dev/hooks/use-move/

// https://ui.mantine.dev/category/dnd

// https://github.com/atlassian/react-beautiful-dnd

function App() {
  return (
    <div className="flex min-h-screen flex-col-reverse lg:flex-row">
      <main className="bg-gray-50 p-8 grow flex flex-col space-y-8">
        <Widget title="Widget">
          <DropZone>
            <TextInput />
          </DropZone>
          <DropZone>
            <TextInput />
          </DropZone>
          <DropZone>
            <TextInput />
          </DropZone>
          <DropZone />
        </Widget>
        <Widget title="Widget">
          <DropZone />
        </Widget>
        <p className="py-16 text-center border border-dashed rounded-md text-gray-400">
          Drop Widget Here
        </p>
      </main>
      <div className="lg:w-[400px] w-full border-l shadow">
        <section className="sticky top-0 w-full p-8 max-h-screen overflow-y-auto">
          <h1 className="text-3xl font-bold text-center pb-4">
            Layout Builder
          </h1>
          <h2>
            Drag a component from below, into the page layout to the left.
            <br />
            Right click a component to edit or remove it.
            <br />^ I'm thinking of using{" "}
            <a
              href="https://www.radix-ui.com/docs/primitives/components/context-menu"
              target="_blank"
              className="text-blue-500 underline hover:text-blue-700"
            >
              radix context menu
            </a>{" "}
            to add options 🤔
            <br />
            ...then just have a dialog or a popover with options for each
            element e.g. width, label, default value etc.
          </h2>
          <hr className="my-8" />
          <div className="flex flex-col space-y-4">
            <DraggableContainer>
              <Widget title="Widget">
                <p>Widget</p>
              </Widget>
            </DraggableContainer>
            <DraggableContainer>
              <TextInput />
            </DraggableContainer>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
