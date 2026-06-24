import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { Card, Flex, Text } from '@chakra-ui/react';
import Pagination from '../../components/Pagination';
import requiresModification from '../../utils/requiresModication';
import users from '../../api/users';
import { toaster } from '../../utils/toast';
import files from '../../api/files';
import EditDocumentModal from './Sections/EditDocumentModal';

const headers = [
  { key: 'file_type', label: 'Tipo' },
  { key: 'updated_at', label: 'Ultima Actualización' },
  { key: 'expiration_date', label: 'Fecha de Vencimiento' },
  { key: 'options', label: 'Opciones' },
];

const Documents = () => {
  const [userId, setUserId] = useState('');
  const [userFiles, setUserFiles] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const pageSize = 5;

  useEffect(() => {
    getUserData();
  }, []);

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

  useEffect(() => {
    if (!userId) return;
    getUserFiles();
  }, [userId]);

  const getUserFiles = async () => {
    try {
      const response = await files.getUserFiles(userId);
      if (response?.success) {
        parseFilesData(response?.data?.files || []);
      }
    } catch (error) {
      toaster.create({
        description: error.message,
        type: 'error',
      });
    }
  };

  const parseFilesData = async (files) => {
    if (!files?.length) {
      setUserFiles([]);
      return;
    }
    const parsedFiles = files.map((file) => ({
      id: file.id,
      file_type: file.file_type,
      updated_at: new Date(file.updated_at).toLocaleDateString(),
      expiration_date: file.expiration_date,
      modificationRequired: requiresModification(file.expiration_date),
      publicUrl: file.publicUrl,
    }));
    setUserFiles(parsedFiles);
  };

  const handleClickOption = (row) => {
    handleEditDocument(row);
  };

  const handleEditDocument = (file) => {
    setSelectedFile(file);
    setIsEditOpen(true);
  };

  return (
    <>
      {isEditOpen && (
        <EditDocumentModal
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          file={selectedFile}
          getUserFiles={getUserFiles}
        />
      )}
      <Flex
        w="100%"
        p={{ base: 8, md: 8 }}
        flexDirection={{ base: 'column-reverse', md: 'row' }}
        gap={{ base: 16, md: 8 }}
      >
        <Card.Root
          alignItems="center"
          flexDirection="row"
          borderRadius={{ base: 0, sm: 18 }}
          bg="var(--mainBackground)"
          boxShadow="sm"
          border="1px solid var(--lightGreyBorder)"
          p={0}
          w="full"
        >
          <Card.Body p={0}>
            <Text as="h1" p={6} fontWeight={600} fontSize="2xl">
              Documentos
            </Text>
            <Table
              data={userFiles}
              headers={headers}
              onClickOption={(row) => handleClickOption(row)}
            />
            <Card.Footer
              justifyContent="space-between"
              alignItems="center"
              p={6}
            >
              <Text fontSize="sm" color="var(--mainText)">
                Mostrando {((page - 1) * pageSize + 1).toString()} de&nbsp;
                {Math.min(page * pageSize, userFiles.length)} de&nbsp;
                {userFiles.length} documentos
              </Text>
              <Pagination
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                total={userFiles.length}
              />
            </Card.Footer>
          </Card.Body>
        </Card.Root>
      </Flex>
    </>
  );
};

export default Documents;
