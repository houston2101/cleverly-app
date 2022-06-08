import {UploadClient} from '@uploadcare/upload-client'

class uploadcareService {
	client = new UploadClient({publicKey: '9847f5846b8997f4db4c'})

	uploadFile = async (fileData) =>
		this.client
			.uploadFile(fileData)
			.then((file) => `https://ucarecdn.com/${file.uuid}/`)
}

const uploadService = new uploadcareService()

export default uploadService
