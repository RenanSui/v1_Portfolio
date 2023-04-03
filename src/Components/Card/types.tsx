import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Key } from 'react';

export type LinkType = string;

interface ITechStack {
	id: number | string | Key;
	skill: string;
	level: string;
}

export type SmallCardProps = {
	title: string;
	message: string;
	icon: IconDefinition;
	topic: string;
};

export type BigCardProps = {
	title: string;
	techStack: Array<ITechStack>;
	icon: IconDefinition;
};

export interface IProjects {
	id: number | string;
	name: string;
	description: string;
	githubLink: LinkType;
	liveDemoLink: LinkType;
	imagePreview: string;
}

export type ProjectCardProps = {
	project: IProjects;
};

export interface IContactInfo {
	id: number | string;
	icon: IconDefinition;
	contactType: string;
	contactInformation: string;
	contactLink: string;
}

export interface IFooterContactInfo {
	id: number | string;
	icon: IconDefinition;
	contactType: string;
	contactLink: string;
}

export type ContactCardProps = {
	contact: IContactInfo;
};
