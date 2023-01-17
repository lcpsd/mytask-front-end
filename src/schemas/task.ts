import * as yup from "yup"

const formats = ['image/jpg', 'image/jpeg', 'image/png'];

export const taskSchema = yup.object({
    name: yup.string().required(),
    image: yup.mixed()
        .test('Fichier taille',
            'upload file', (value) => !value || (value && value.size <= 1024 * 1024))
        .test('format',
            'upload file', (value) => !value || (value && formats.includes(value.type))),
})