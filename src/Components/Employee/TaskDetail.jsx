import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../../constants/constants";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export const TaskDetail= () => {
  const [cards, setCards] = useState([])
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('id');

  useEffect(() => {
    const fetchData = async () => {
       try {
         const response = await axios.get(`${baseUrl}/project/taskDetails/${projectId}/`,{
           headers: {
             'Authorization': `Bearer ${localStorage.getItem('access_token')}`
         }
       });
       setCards(response.data);
       console.log(response.data);
   }catch (e) {
     console.log(e);
   }
 }
     fetchData();
 },[]);
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="inProgress"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="completed"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      </div>
    </div>
    
  );
}

const Column = ({ title, headingColor, cards, column, setCards }) => {
  
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };
  
  const handleDragEnd = (e) => {
    const cardId = parseInt(e.dataTransfer.getData("cardId"));
    
    setActive(false);
    clearHighlights();
  
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const before = element.dataset.before || "-1";
    
    if (before !== cardId) {
      let copy = [...cards];
      console.log(copy);
      let cardToTransfer = copy.find((c) => c.id === cardId);
      console.log(cardToTransfer);
      
      if (!cardToTransfer) return;
      
      cardToTransfer = { ...cardToTransfer, status: column };
      console.log(cardToTransfer);
      copy = copy.filter((c) => c.id !== cardId);
      console.log(copy);
      const moveToBack = before === "-1";
      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;
        copy.splice(insertAtIndex, 0, cardToTransfer);
      }
      setCards(copy);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };
   
  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.status === column);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
      </div>
    </div>
  );
};

const Card = ({ taskName, id, status, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={status} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { taskName, id, status })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{taskName}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};