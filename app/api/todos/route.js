import { NextResponse } from 'next/server';
import db from '@/lib/db';


export async function GET() {
  try {
    const result = await db.query('SELECT * FROM todos ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(request) {
  try {
    const { title } = await request.json();
    const result = await db.query(
      'INSERT INTO todos (title, completed) VALUES ($1, false) RETURNING *',
      [title]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function PUT(request) {
  try {
    const { id, completed } = await request.json();
    const result = await db.query(
      'UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *',
      [completed, id]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function PATCH(request) {
  try {
    const { id, title } = await request.json();
    const result = await db.query(
      'UPDATE todos SET title = $1 WHERE id = $2 RETURNING *',
      [title, id]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await db.query('DELETE FROM todos WHERE id = $1', [id]);
    return NextResponse.json({ message: 'Todo deleted successfully ' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 