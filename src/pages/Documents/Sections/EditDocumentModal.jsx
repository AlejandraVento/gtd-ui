import React, { useEffect } from 'react';
import Modal from '../../../components/Modal';
import {
  Button,
  Field,
  FileUpload,
  Flex,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import users from '../../../api/users';
import { toaster } from '../../../utils/toast';
import files from '../../../api/files';
import Client from '../../../api/client';
import axios from 'axios';

export default function EditDocumentModal({
  isOpen,
  setIsOpen,
  file,
  fields,
  getUserFiles,
}) {
  const [expirationDate, setExpirationDate] = React.useState(
    file?.expiration_date
      ? new Date(file.expiration_date).toISOString().split('T')[0]
      : '',
  );
  const [userId, setUserId] = React.useState('');
  const [newFile, setNewFile] = React.useState(null);

  useEffect(() => {
    if (!userId) getUserData();
  }, [userId]);

  useEffect(() => {
    if (!newFile) return;
    setExpirationDate('');
  }, [newFile]);

  const handleFileChange = (details) => {
    const selectedFile = details?.acceptedFiles?.[0] || null;
    setNewFile(selectedFile);
  };

  const getFileName = (fileUrl) => {
    if (!fileUrl) return '';
    const parts = fileUrl.split('/');
    return parts[parts.length - 1];
  };

  const getUserData = async () => {
    try {
      const response = await users.getCurrentUser();
      if (response?.success) {
        setUserId(response?.data?.user?.id);
      }
    } catch (error) {
      toaster.create({
        description: error.message,
        type: 'error',
      });
    }
  };

  const uploadDocument = async () => {
    if (!newFile) {
      toaster.create({
        description: 'Selecciona un archivo para continuar.',
        type: 'warning',
      });
      return;
    }

    if (!expirationDate) {
      toaster.create({
        description: 'Selecciona una fecha de vencimiento.',
        type: 'warning',
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', newFile);
      formData.append('user_id', userId);
      formData.append('file_type', file.file_type);
      formData.append('expiration_date', expirationDate);

      const response = await files.uploadFile(formData);
      if (response?.success) {
        setIsOpen(false);
        toaster.create({
          description: 'Documento subido exitosamente',
          type: 'success',
        });
        getUserFiles();
      }
    } catch (error) {
      toaster.create({
        description: error.message,
        type: 'error',
      });
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(`${file.publicUrl}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: 'application/octet-stream' }),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', getFileName(file.publicUrl));
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      console.error('Error downloading the file:', e);
      toaster.create({
        description: 'Error al descargar el archivo',
        type: 'info',
        closable: true,
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={file?.file_type}
      description={`Ultima modificación - ${new Date(file?.updated_at).toLocaleDateString()}`}
      actionButtonFunction={file?.modificationRequired ? uploadDocument : null}
      actionButtonText={file?.modificationRequired ? 'Guardar Cambios' : ''}
    >
      {fields?.map((field, index) => (
        <div key={index}>
          <strong>{field.label}:</strong> {field.value}
        </div>
      ))}
      {file?.modificationRequired && (
        <>
          <Text color="red.500" fontSize="md" fontWeight={700}>
            El documento esta vencido, si deseas solicitar algún trámite deberas
            actualizar.
          </Text>
        </>
      )}
      <Field.Root required>
        <Field.Label>
          Fecha de vencimiento <Field.RequiredIndicator />
        </Field.Label>
        <InputGroup>
          <Input
            placeholder="dd/mm/yyyy"
            type="date"
            aria-labelledby="Fecha de vencimiento"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            border="1px solid var(--lightGreyBorder)"
            fontSize="md"
            borderRadius={10}
            fontWeight={400}
            disabled={!newFile}
            py={6}
          />
        </InputGroup>
      </Field.Root>
      <Flex gap={4} direction="column" mt={6}>
        <Button
          color="var(--mainText)"
          bg="var(--secondaryBackground)"
          _hover={{ bg: 'var(--secondaryText)' }}
          borderRadius={10}
          maxWidth="min-content"
          onClick={handleDownload}
        >
          <FontAwesomeIcon icon={faDownload} color="var(--mainText)" />
          Descargar
        </Button>
        {file?.modificationRequired && (
          <FileUpload.Root
            accept={['application/pdf, image/*']}
            maxFiles={1}
            onFileChange={handleFileChange}
          >
            <FileUpload.HiddenInput />
            <Flex gap={4}>
              <FileUpload.Trigger asChild>
                <Button
                  color="var(--mainText)"
                  bg="var(--secondaryBackground)"
                  _hover={{ bg: 'var(--secondaryText)' }}
                  borderRadius={10}
                  disabled={!file?.modificationRequired && !expirationDate}
                >
                  <FontAwesomeIcon icon={faUpload} color="var(--mainText)" />
                  Subir
                </Button>
              </FileUpload.Trigger>
              <FileUpload.List
                showSize
                clearable
                mb={0}
                css={{ '& li': { padding: '5px' } }}
              />
            </Flex>
          </FileUpload.Root>
        )}
      </Flex>
    </Modal>
  );
}
