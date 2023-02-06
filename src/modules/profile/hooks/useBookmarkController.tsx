import { useBookmark } from '@/common/apis/services/bookmarks/bookmark';
import { useDeleteBookmark } from '@/common/apis/services/bookmarks/deleteBookmark';
import { useIsBookmark } from '@/common/apis/services/bookmarks/isBookmark';
import { ClinicStatus } from '@/common/constants/status/clinicStatus';
import { useEffect, useState } from 'react';

interface useBookmarkProps {
  slug: string;
}

export const useBookmarkController = ({ slug }: useBookmarkProps) => {
  const isBookmark = useIsBookmark({ slug });
  const bookmark = useBookmark();
  const deleteBookmark = useDeleteBookmark();
  const [currentBookMarkStatus, setCurrentBookMarkStatus] = useState(false);

  useEffect(() => {
    setCurrentBookMarkStatus(isBookmark.data?.data?.status === ClinicStatus.BOOKMARK_EXISTS);
  }, [isBookmark.data]);

  const toggleBookMark = () => {
    setCurrentBookMarkStatus(prev => !prev);
    if (currentBookMarkStatus) return deleteBookmark.mutate({ slug });
    return bookmark.mutate({ slug });
  };

  return {
    isBookmark: currentBookMarkStatus,
    toggleBookMark,
  };
};
