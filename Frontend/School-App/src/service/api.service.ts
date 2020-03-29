import { Injectable } from '@angular/core';
import { School } from 'src/model/school';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
};
const apiUrl = 'http://localhost:5000/api/school'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSchools (): Observable<School[]> {
    return this.http.get<School[]>(apiUrl)
      .pipe(
        // Tap serve idêntico ao observable, mais utilizados em colher valores emitidos pelo Observable original.
        tap(schools => console.log('Schools has been read')),
        catchError(this.manageError('getSchools', []))
      );
  }

  getSchool(id: number): Observable<School> {
    const url = '${apiUrl}/${id}';
    return this.http.get<School>(url).pipe(
      tap(school => console.log('School returned id=${id}')),
      catchError(this.manageError<School>('getSchool id=${id}'))
    );
  }

  addSchool (school): Observable<School> {
    return this.http.post<School>(apiUrl, school, httpOptions).pipe(
      tap((school: School) => console.log('School with id=${produto._id} had been added')),
      catchError(this.manageError<School>('addSchool'))
    );
  }

  updateSchool(id, school): Observable<any> {
    const url = '${apiUrl}/${id}';
    return this.http.put(url, school, httpOptions).pipe(
      tap(school => console.log('update school with id=${id}')),
      catchError(this.manageError<School>('updateSchool'))
    );
  }

  deleteSchool (id): Observable<School> {
    const url = '${apiUrl}/delete/${id}';

    return this.http.delete<School>(url, httpOptions).pipe(
      tap(School => console.log('School com id=${id} has been removed')),
      catchError(this.manageError<School>('deleteProduto'))
    );
  }

  private manageError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
