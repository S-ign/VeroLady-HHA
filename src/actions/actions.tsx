import type { GetServerSideProps } from 'next'
import { Client } from "@hubspot/api-client";
import { SimplePublicObject } from '@hubspot/api-client/lib/codegen/crm/companies';

export type FormData = {
	firstname: string;
	lastname: string;
	phone: string;
	email: string;
}

export const createObject = async (data: FormData) => {
	const hubspotClient = new Client({ accessToken:  process.env.HUBSPOT_TOKEN });
	var properties = {
		"firstname": data.firstname,
		"lastname": data.lastname,
		"phone": data.phone,
		"email": data.email
	}
	const SimplePublicObjectInputForCreate = {
		properties,
		associations: [] 
	};

	const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInputForCreate); console.log(JSON.stringify(apiResponse, null, 2));
}
