import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Journal {
  id?: string;
  content?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getJournal() {
    const journalRef = collection(this.firestore, 'journal');
    return collectionData(journalRef, { idField: 'id' }) as Observable<Journal[]>;
  }

  getNoteById(id: any): Observable<Journal> {
    const journalDocRef = doc(this.firestore, `journal/${id}`);
    return docData(journalDocRef, { idField: 'id' }) as Observable<Journal>;
  }

  addJournal(journal: Journal) {
    const journalRef = collection(this.firestore, 'journal');
    return addDoc(journalRef, journal);
  }
}

