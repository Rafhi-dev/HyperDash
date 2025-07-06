import { faUser, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import Tabs from "./tabs";

function Tabv() {
  const content = [
    {
      label: "Tabs 1",
      content: (
        <>
          <div className="font-bold text-2xl mb-2">Ini adalah Tabs ke 1</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </>
      ),
    },
    {
      label: "Tabs 2",
      content: (
        <>
          <div className="font-bold text-2xl mb-2">Ini adalah Tabs ke 2</div>
          <div>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </div>
        </>
      ),
    },
    {
      label: "Tabs 3",
      content: (
        <>
          <div className="font-bold text-2xl mb-2">Ini adalah Tabs ke 3</div>
          <div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </>
      ),
    },
  ];

  const withIcon = [
    {
      label: "Tabs 1",
      icon: faUserAstronaut,
      content: (
        <>
          <div className="font-bold text-2xl mb-2">Ini adalah Tabs ke 1</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </>
      ),
    },
    {
      label: "Tabs 2",
      icon: faUserAstronaut,
      content: (
        <>
          <div className="font-bold text-2xl mb-2">Ini adalah Tabs ke 2</div>
          <div>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </div>
        </>
      ),
    },
    {
      label: "Tabs 3",
      icon: faUserAstronaut,
      content: (
        <>
          <div className="font-bold text-2xl mb-2">Ini adalah Tabs ke 3</div>
          <div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="m-6">
        <div className="flex flex-col gap-6">
          <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-md p-4">
            <div className="text-xl font-bold mb-2">Sample Tabs</div>

            <Tabs tabs={content} />
          </div>
          <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-md p-4">
            <div className="text-xl font-bold mb-2">Tabs with icon</div>

            <Tabs tabs={withIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabv;
