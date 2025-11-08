import { prisma } from './prisma'
import { Project } from '@prisma/client'

export type CreateProjectData = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>

// Create a new project
export async function createProject(data: CreateProjectData) {
  try {
    const project = await prisma.project.create({
      data: {
        title: data.title,
        client: data.client,
        description: data.description,
        shortDescription: data.shortDescription,
        category: data.category,
        status: data.status,
        startDate: data.startDate,
        completionDate: data.completionDate,
        technologies: data.technologies,
        features: data.features,
        imageUrls: data.imageUrls,
        budget: data.budget,
        teamSize: data.teamSize,
        testimonial: data.testimonial,
        testimonialAuthor: data.testimonialAuthor,
        projectUrl: data.projectUrl,
        githubUrl: data.githubUrl,
      },
    })
    return project
  } catch (error) {
    console.error('Error creating project:', error)
    throw new Error('Failed to create project')
  }
}

// Get all projects
export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw new Error('Failed to fetch projects')
  }
}

// Get project by ID
export async function getProjectById(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
    })
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    throw new Error('Failed to fetch project')
  }
}

// Update project
export async function updateProject(id: string, data: Partial<CreateProjectData>) {
  try {
    const project = await prisma.project.update({
      where: {
        id,
      },
      data,
    })
    return project
  } catch (error) {
    console.error('Error updating project:', error)
    throw new Error('Failed to update project')
  }
}

// Delete project
export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: {
        id,
      },
    })
    return true
  } catch (error) {
    console.error('Error deleting project:', error)
    throw new Error('Failed to delete project')
  }
}

// Get projects by category
export async function getProjectsByCategory(category: string) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        category,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects by category:', error)
    throw new Error('Failed to fetch projects by category')
  }
}

// Get projects by status
export async function getProjectsByStatus(status: string) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        status,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects by status:', error)
    throw new Error('Failed to fetch projects by status')
  }
}

// Search projects
export async function searchProjects(query: string) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            client: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            technologies: {
              has: query,
            },
          },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return projects
  } catch (error) {
    console.error('Error searching projects:', error)
    throw new Error('Failed to search projects')
  }
}

// Get project statistics
export async function getProjectStats() {
  try {
    const [
      totalProjects,
      completedProjects,
      inProgressProjects,
      planningProjects,
    ] = await Promise.all([
      prisma.project.count(),
      prisma.project.count({
        where: {
          status: 'completed',
        },
      }),
      prisma.project.count({
        where: {
          status: 'in-progress',
        },
      }),
      prisma.project.count({
        where: {
          status: 'planning',
        },
      }),
    ])

    return {
      total: totalProjects,
      completed: completedProjects,
      inProgress: inProgressProjects,
      planning: planningProjects,
    }
  } catch (error) {
    console.error('Error fetching project stats:', error)
    throw new Error('Failed to fetch project statistics')
  }
}



