"use client";

import { todos } from "@/types/todos";
import Image from "next/image";
import Link from "next/link";

function TodoItem({ todo }: { todo: todos }) {
  return (
    <li
      key={todo.id}
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{todo.title}</h3>
      <Image
        src={`${todo.imgPath}?random=${Math.random()}`}
        alt="투두 이미지"
        width={50}
        height={50}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={`/todolist/${todo.id}`}>내용보기</Link>
      </div>
    </li>
  );
}

export default TodoItem;
