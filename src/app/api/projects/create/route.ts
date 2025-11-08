import { NextRequest, NextResponse } from 'next/server';
import { createProject } from '../../../../../lib/projects';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Log the received data for debugging
    console.log('API received data:', {
      ...data,
      features: data.features,
      imageUrls: data.imageUrls,
      budget: data.budget,
      featuresType: Array.isArray(data.features) ? 'array' : typeof data.features,
      featuresLength: data.features?.length
    });

    // Ensure arrays are properly formatted
    const projectData = {
      ...data,
      features: Array.isArray(data.features) ? data.features : [],
      technologies: Array.isArray(data.technologies) ? data.technologies : [],
      imageUrls: Array.isArray(data.imageUrls) ? data.imageUrls : []
    };

    const project = await createProject(projectData);
    console.log('Created project with ID:', project.id);
    
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    const details = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to create project', details },
      { status: 500 }
    );
  }
}
