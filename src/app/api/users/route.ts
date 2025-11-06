import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

// GET /api/users - 获取所有用户
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        avatar: true,
        phone: true,
        status: true,
        role: true,
        lastLoginAt: true,
        createdAt: true,
        updatedAt: true,
        // 不返回 password 字段
      },
      orderBy: {
        createdAt: 'desc', // 按创建时间倒序
      },
    })
    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

// POST /api/users - 创建新用户
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, email, password, name, avatar, phone, role, status } = body

    // 验证必填字段
    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      )
    }
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password, // 注意：实际应用中应该先对密码进行哈希处理
        name: name || null,
        avatar: avatar || null,
        phone: phone || null,
        role: role || 'user',
        status: status || 'active',
      },
    })

    // 返回用户信息（不包含密码）
    const { password: _, ...userWithoutPassword } = user
    return NextResponse.json(userWithoutPassword, { status: 201 })
  } catch (error: any) {
    console.error('Error creating user:', error)
    
    // 处理唯一约束错误
    if (error.code === 'P2002') {
      const field = error.meta?.target?.[0] || 'field'
      return NextResponse.json(
        { error: `${field} already exists` },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}

